const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    {
      drupal {
        mainNavigation: menuByName(name: "main") {
          __typename
          links {
            label
            url {
              path
            }
          }
        }
        pages: nodeQuery(
          filter: {
            conditions: [{ operator: EQUAL, field: "type", value: ["page"] }]
          }
          sort: { field: "created", direction: DESC }
        ) {
          entities {
            entityUrl {
              path
            }
            entityId
          }
        }
        articles: nodeQuery(
          filter: {
            conditions: [{ operator: EQUAL, field: "type", value: ["article"] }]
          }
        ) {
          entities {
            __typename
            entityUrl {
              path
            }
            entityId
          }
        }
      }
    }
  `).then((result) => {
    console.log("result", result);
    const entities = result.data.drupal.pages.entities;
    const articles = result.data.drupal.articles.entities;

    const mainNavigationLinks = result.data.drupal.mainNavigation.links.map(
      (link) => {
        return {
          label: link.label,
          to: link.url.path,
        };
      }
    );

    actions.createSlice({
      id: "navigation",
      component: path.resolve(`src/components/navigation/index.tsx`),
      context: {
        navigation: mainNavigationLinks,
      },
    });

    actions.createSlice({
      id: "footer",
      component: path.resolve(`src/components/footer/index.tsx`),
      context: {
        navigation: mainNavigationLinks,
      },
    });

    entities.forEach((entity) => {
      const pathname =
        entity.entityUrl.path === "/home" ? "/" : entity.entityUrl.path;

      actions.createPage({
        path: pathname,
        component: path.resolve(`src/templates/nodePage.tsx`),
        context: {
          id: entity.entityId,
        },
      });
    });

    articles.forEach((entity) => {
      const pathname = entity.entityUrl.path;
      if (!pathname) return;
      actions.createPage({
        path: pathname,
        component: path.resolve(`src/templates/nodeArticle.tsx`),
        context: {
          id: entity.entityId,
        },
      });
    });
  });
};
