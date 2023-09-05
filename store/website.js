import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl, subBaseUrl } from '~/repositories/Repository';

export const state = () => ({
    products: null,
    productsRelated: null,
    singleProduct: null,
    solutions: null,
    solutionCategoriesAndSub: null,
    caseStudies: null,
    caseStudyLimit: null,
    articles: null,
    articlesLimited: null,
    articlesCategories: null,
    articlesCategoriesLimited: null,
    singleArticlesCategories: null,
    productsTotal: 0,
    articlesTotal: 0,
    singleProduct: null,
    singleProductCategories: null,
    //productCategories: null,
    subProductCategories: null,
    homePage: null,
    storeLocator: null,
    solutionCategories: null,
    solutionCategoryTotal: 0,
    newsCategories: null,
    searchResults: null,
    loading: false,
    page: 0,
    perPage: 12,
    downloadCategories: null,
    sort_by: 'created_at:desc',
    totalSingleProductCategories: 0,
    totalSingleProductSubCategories: 0,
    categoryAndSubCategories: null,
    solutionSub: null,
    solutionSubTotal: 0,
    solutionTotal: 0,
    videoSubCategories: null,
    courseVideo: null,
    courses: null,
    courseSection: null
});

export const mutations = {
    setLoading(state, payload) {
        state.loading = payload;
    },

    setProducts(state, payload) {
        state.products = payload;
    },

    setArticles(state, payload) {
        state.articles = payload;
    },

    setArticlesLimited(state, payload) {
        state.articlesLimited = payload;
    },

    setProductsTotal(state, payload) {
        state.productsTotal = payload;
    },

    setArticlesTotal(state, payload) {
        state.articlesTotal = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setRelatedProducts(state, payload) {
        state.productsRelated = payload;
    },

    setSingleProduct(state, payload) {
        state.singleProduct = payload;
    },

    setArticlesCategories(state, payload) {
        state.articlesCategories = payload;
    },

    setArticlesCategoriesLimited(state, payload) {
        state.articlesCategoriesLimited = payload;
    },

    setSingleArticlesCategories(state, payload) {
        state.singleArticlesCategories = payload;
    },

    setSingleProductCategories(state, payload) {
        state.singleProductCategories = payload;
    },

    // setProductCategories(state, payload) {
    //     state.productCategories = payload;
    // },
    setCourse(state, payload) {
        state.courses = payload;
    },

    setCourseSection(state, payload) {
        state.courseSection = payload;
    },

    setCourseVideo(state, payload) {
        state.courseVideo = payload;
    },

    setSubProductCategories(state, payload) {
        state.subProductCategories = payload;
    },

    setSolutionCategories(state, payload) {
        state.solutionCategories = payload;
    },

    setSolutionCategoryTotal(state, payload) {
        state.solutionCategoryTotal = payload;
    },

    setSolutionSub(state, payload) {
        state.solutionSub = payload;
    },

    setSolutionSubTotal(state, payload) {
        state.solutionSubTotal = payload;
    },

    setSolutionCategoryAndSubCategories(state, payload) {
        state.solutionCategoriesAndSub = payload;
    },

    setNewsCategories(state, payload) {
        state.newsCategories = payload;
    },

    setSolutions(state, payload) {
        state.solutions = payload;
    },

    setSolutionTotal(state, payload) {
        state.solutionTotal = payload;
    },

    setCaseStudies(state, payload) {
        state.caseStudies = payload;
    },
    setCaseStudyLimit(state, payload) {
        state.caseStudyLimit = payload;
    },

    setHomepage(state, payload) {
        state.homePage = payload;
    },

    setStoreLocator(state, payload) {
        state.storeLocator = payload;
    },

    setDownloadCategories(state, payload) {
        state.downloadCategories = payload;
    },

    setTotalSingleProductCategories(state, payload) {
        state.totalSingleProductCategories = payload;
    },

    setTotalSubCategories(state, payload) {
        state.totalSingleProductSubCategories = payload;
    },

    setCategoryAndSubCategories(state, payload) {
        state.categoryAndSubCategories = payload;
    },
    setSingleProduct(state, payload) {
        state.singleProduct = payload;
    }
};

export const actions = {
    async getProducts({ state, commit }, payload) {
        /*
        commit('setLoading', true);
        let params = {
            _start:
                Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort:
                Object.keys(payload).length === 0
                    ? state.sort_by
                    : payload.sort_by,
            _limit:
                Object.keys(payload).length === 0
                    ? state.perPage
                    : payload.perPage
        };

        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
        */
    },

    async sendEnquiry({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${baseUrl}/integrations/enquiries`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async requestAQuote({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/request-a-quotes`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async requestAQuote({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/request-a-quotes`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async requestAProductQuote({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/product-quotes`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async projectConsultation({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/project-consultations`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getArticles({ commit, state }, payload) {
        let searchQuery =
            payload.search == undefined ? '' : { _q: payload.search };
        commit('setLoading', true);
        let params = {
            _start:
                Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort: 'created_at:desc',
            _limit:
                Object.keys(payload).length === 0
                    ? state.perPage
                    : payload.perPage,
            ...searchQuery
        };

        const URL = `${subBaseUrl}/articles?${serializeQuery(params)}`;
        const URLCount = `${subBaseUrl}/articles/count`;
        const res = Repository.get(URL);
        const count = Repository.get(URLCount);

        await Promise.all([res, count]).then(value => {
            commit('setArticles', value[0].data);
            commit('setArticlesTotal', value[1].data);
            commit('setLoading', false);
        });
    },

    async getDownloadCategories({ commit }) {
        commit('setLoading', true);
        const response = await Repository.get(
            `${subBaseUrl}/product-file-categories`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        commit('setDownloadCategories', response);
        commit('setLoading', false);

        return response;
    },

    async getPaginatedProductFiles({ state, commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start:
                payload.page === 0 ||
                payload.page === undefined ||
                payload.page === null
                    ? state.page
                    : payload.page,
            _limit:
                payload.perPage === null ||
                payload.perPage === undefined ||
                payload.perPage === 0
                    ? state.perPage
                    : payload.perPage
        };

        const reponse = await Repository.get(
            `${subBaseUrl}/product-files?product_file_category.category=${
                payload.category
            }&${serializeQuery(params)}`
        )
            .then(res => {
                const productFiles = res.data ? res.data : [];
                commit('setLoading', false);
                return productFiles;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    },

    async searchDownloadCategories({ commit }, payload) {
        commit('setLoading', true);
        let response;
        response = await Repository.get(
            `${subBaseUrl}/product-files?product_file_category.category=${payload.category}&_q=${payload.search}`
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async getProductFilesCount({ commit }, payload) {
        let response;
        response = await Repository.get(
            `${subBaseUrl}/product-files/count?product_file_category.category=${payload.category}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async fetchProductFilesByCategory({ commit }, payload) {
        commit('setLoading', true);
        let response;
        response = await Repository.get(
            `${subBaseUrl}/product-files?product_file_category.category=${payload.category}&_limit=5`
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async getArticlesLimited({ commit }) {
        commit('setLoading', true);

        const reponse = await Repository.get(
            `${subBaseUrl}/articles/getArticleByLimit`
        )
            .then(response => {
                commit('setArticlesLimited', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getHomePageNewsCenter({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/articles/home_page_news_center`
        )
            .then(response => {
                commit('setArticlesLimited', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSolutions({ commit }, payload) {
        commit('setLoading', true);
        let searchSolution =
            payload.search == undefined || payload.search == ''
                ? null
                : {
                      _q: `${payload.search.trim().toLowerCase()}`
                  };

        let params = {
            _start: Object.keys(payload).length === 0 ? 0 : payload.page,
            _sort: 'created_at:desc',
            _limit: Object.keys(payload).length === 0 ? 6 : payload.perPage,
            ...searchSolution
        };

        let paramCount = {
            ...searchSolution
        };

        let url = `${subBaseUrl}/solutions/?${serializeQuery(params)}`;
        let urlCount = `${subBaseUrl}/solutions/count?${serializeQuery(
            paramCount
        )}`;
        const res = Repository.get(url);
        const count = Repository.get(urlCount);

        await Promise.all([res, count]).then(value => {
            commit('setSolutions', value[0].data);
            commit('setSolutionTotal', value[1].data);
            commit('setLoading', false);
        });
    },

    async getCaseStudies({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'sort_id:asc',
            _limit: 100
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/case-studies?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setCaseStudies', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSingleProduct({ commit, dispatch }, payload) {
        commit('setLoading', true);
        let params = {
            slug_in: payload.id
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSingleProduct', response.data[0]);
                dispatch(
                    'getRelatedProducts',
                    response.data[0].product_category
                );
                commit('setLoading', false);
                return response.data[0];
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getRelatedProducts({ commit }, payload) {
        let params = {
            slug_in: payload.id
        };

        let url = `${subBaseUrl}/product-categories?${serializeQuery(params)}`;
        const reponse = await Repository.get(url)
            .then(response => {
                commit('setRelatedProducts', response.data[0].products);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    // async getTotalSingleProductCategories({ commit }, slug) {
    //     let params = {
    //         'product_category.slug': slug
    //     };
    //     const reponse = await Repository.get(
    //         `${subBaseUrl}/products/count?${serializeQuery(params)}`
    //     )
    //         .then(response => {
    //             commit('setTotalSingleProductCategories', response.data);
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // },

    async getSingleProductCategories({ state, commit }, payload) {
        let params = {
            _start:
                payload.page === 0 ||
                payload.page === undefined ||
                payload.page === null
                    ? state.page
                    : payload.page,
            _sort: payload.sort_by === 0 ? state.sort_by : payload.sort_by,
            _limit:
                payload.perPage === null ||
                payload.perPage === undefined ||
                payload.perPage === 0
                    ? state.perPage
                    : payload.perPage,
            'product_categories.slug': payload.slug
        };

        let paramCount = {
            'product_categories.slug': payload.slug
        };

        let productCategoryCountURL = `${subBaseUrl}/products/count?${serializeQuery(
            paramCount
        )}`;

        let product = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        );

        let count = await Repository.get(productCategoryCountURL);

        // const URL = `${subBaseUrl}/product-categories?slug=${payload.slug}`;
        // const productCategory = await Repository.get(URL);

        commit('setLoading', true);
        commit('setSingleProductCategories', product.data);
        commit('setTotalSingleProductCategories', count.data);
        //commit('setSingleProduct', productCategory.data);
        commit('setLoading', false);

        return product;
        // let categories = {
        //     product: product,
        //     productCategory: productCategory.data
        // };

        // console.log('categories::', categories);

        // return categories;
    },

    async getCategoryAndSubCategories({ commit }) {
        const reponse = await Repository.get(
            `${subBaseUrl}/product-categories/categoryAndSubcategory`
        )
            .then(response => {
                commit('setLoading', true);
                const data = response.data;
                commit('setCategoryAndSubCategories', data);
                commit('setLoading', false);
                return data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSolutionCategoryAndSubCategories({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/solution-categories/categoryAndSubcategory`
        )
            .then(response => {
                commit('setSolutionCategoryAndSubCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    // this fetches all the sub categories of a particular video using slug as the parameter

    async getESectionBySlug({ commit }, payload) {
        let params = {
            'courses.slug': payload.slug
        };
        let url = `${subBaseUrl}/e-sections?${serializeQuery(params)}`;

        commit('setLoading', true);
        const reponse = await Repository.get(url)
            .then(response => {
                commit('setCourseSection', response.data);
                commit('setLoading', false);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getVideoById({ commit }, payload) {
        let params = {
            id: payload
        };
        let url = `${subBaseUrl}/tutorial-videos?${serializeQuery(params)}`;

        // commit('setLoading', true);
        const reponse = await Repository.get(url)
            .then(response => {
                commit('setCourseVideo', response.data[0]);
                //commit('setLoading', false);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCourse({ commit }) {
        let url = `${subBaseUrl}/tutorial-video-categories`;

        commit('setLoading', true);
        const reponse = await Repository.get(url)
            .then(response => {
                commit('setCourse', response.data);
                commit('setLoading', false);
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    },

    // async getArticlesCategories({ commit }) {
    //     commit('setLoading', true);
    //     const reponse = await Repository.get(`${subBaseUrl}/categories/`)
    //         .then(response => {
    //             commit('setArticlesCategories', response.data);
    //             commit('setLoading', false);
    //             return response.data;
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return [];
    // },

    // async getProductCategories({ state, commit }, payload) {
    //     try {
    //         commit('setLoading', true);

    //         //let searchProduct = {};
    //         let params = {
    //             _start:
    //                 payload.page === 0 ||
    //                 payload.page === undefined ||
    //                 payload.page === null
    //                     ? state.page
    //                     : payload.page,
    //             _sort: payload.sort_by === 0 ? state.sort_by : payload.sort_by,
    //             _limit:
    //                 payload.perPage === null ||
    //                 payload.perPage === undefined ||
    //                 payload.perPage === 0
    //                     ? state.perPage
    //                     : payload.perPage,
    //             'product_category.slug': payload.slug
    //         };

    //         let paramCount = {
    //             'product_category.slug': payload.slug
    //         };

    //         let productCategoryURL = `${subBaseUrl}/products?${serializeQuery(
    //             params
    //         )}`;
    //         let productCategoryCountURL = `${subBaseUrl}/products/count?${serializeQuery(
    //             paramCount
    //         )}`;

    //         try {
    //             let productCategory = Repository.get(productCategoryURL);
    //             let productCategoryCount = Repository.get(
    //                 productCategoryCountURL
    //             );

    //             let product = await productCategory;
    //             let count = await productCategoryCount;

    //             commit('setSingleProductCategories', product.data);
    //             commit('setTotalSingleProductCategories', count.data);

    //             return product.data;
    //         } catch (error) {
    //             console.log('sub categories', error);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },

    async getSingleArticlesCategories({ commit }, slug) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/categories?slug=${slug}`
        )
            .then(response => {
                commit('setSingleArticlesCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getSubProductCategories({ state, commit }, payload) {
        let params = {
            _start:
                payload.page === 0 ||
                payload.page === undefined ||
                payload.page === null
                    ? state.page
                    : payload.page,
            _sort: payload.sort_by === 0 ? state.sort_by : payload.sort_by,
            _limit:
                payload.perPage === null ||
                payload.perPage === undefined ||
                payload.perPage === 0
                    ? state.perPage
                    : payload.perPage,
            'product_sub_categories.slug': payload.slug
        };

        let paramCount = {
            'product_sub_categories.slug': payload.slug
        };

        let subProductURL = `${subBaseUrl}/products/?${serializeQuery(params)}`;
        let subProductCountURL = `${subBaseUrl}/products/count?${serializeQuery(
            paramCount
        )}`;

        const [subProduct, subProductCount] = await Promise.all([
            Repository.get(subProductURL),
            Repository.get(subProductCountURL)
        ]);

        commit('setLoading', true);
        commit('setSubProductCategories', subProduct.data);
        commit('setTotalSingleProductCategories', subProductCount.data);
        commit('setLoading', false);
    },

    async getSolutionCategories({ commit }, payload) {
        try {
            commit('setLoading', true);
            let searchSolution =
                payload.search == undefined || payload.search == ''
                    ? null
                    : {
                          _q: `${payload.search.trim().toLowerCase()}`
                      };
            let params = {
                _start: Object.keys(payload).length === 0 ? 0 : payload.page,
                _sort: 'created_at:desc',
                _limit: Object.keys(payload).length === 0 ? 6 : payload.perPage,
                'solution_categories.slug': payload.slug,
                ...searchSolution
            };

            let paramCount = {
                'solution_categories.slug': payload.slug,
                ...searchSolution
            };

            let url = `${subBaseUrl}/solutions/?${serializeQuery(params)}`;
            let urlCount = `${subBaseUrl}/solutions/count?${serializeQuery(
                paramCount
            )}`;
            try {
                let solutionGet = Repository.get(url);
                let solutionCount = Repository.get(urlCount);

                let solution = await solutionGet;
                let count = await solutionCount;

                commit('setSolutionCategories', solution.data);
                commit('setSolutionCategoryTotal', count.data);
                commit('setLoading', false);
            } catch (error) {
                return error;
            }
        } catch (error) {}
    },

    async getSolutionSub({ commit }, payload) {
        commit('setLoading', true);
        let searchSolution =
            payload.search == undefined || payload.search == ''
                ? null
                : {
                      _q: `${payload.search.trim().toLowerCase()}`
                  };

        let params = {
            _start: Object.keys(payload).length === 0 ? 0 : payload.page,
            _sort: 'created_at:desc',
            _limit: Object.keys(payload).length === 0 ? 6 : payload.perPage,
            'solution_sub_cats.slug': payload.slug,
            ...searchSolution
        };

        let paramCount = {
            'solution_sub_cats.slug': payload.slug,
            ...searchSolution
        };

        let url = `${subBaseUrl}/solutions/?${serializeQuery(params)}`;
        let urlCount = `${subBaseUrl}/solutions/count?${serializeQuery(
            paramCount
        )}`;
        const res = Repository.get(url);
        const count = Repository.get(urlCount);

        await Promise.all([res, count]).then(value => {
            commit('setSolutionSub', value[0].data);
            commit('setSolutionSubTotal', value[1].data);
            commit('setLoading', false);
        });
    },

    async getArticlesCategoriesLimited({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/categories/home_page_categories/`
        )
            .then(response => {
                commit('setArticlesCategoriesLimited', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return [];
    },

    async fetchArticlesCountByCategorySlug({ commit }, slug) {
        commit('setLoading', true);

        const response = await Repository.get(
            `${subBaseUrl}/articles/count?categories.slug=${slug}`
        )
            .then(response => {
                return response;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    async getNewsCategories({ commit }, slug) {
        commit('setLoading', true);

        const response = await Repository.get(
            `${subBaseUrl}/getCategoriesBySlug/${slug}`
        )
            .then(response => {
                commit('setNewsCategories', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    },

    // async getProductsTotal({ state, commit }, payload) {
    //     let params = {
    //         _limit: -1
    //     };
    //     const reponse = await Repository.get(
    //         `${subBaseUrl}/products?${serializeQuery(params)}`
    //     )
    //         .then(response => {
    //             commit('setProductsTotal', response.data.length);
    //             return response.data;
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // },

    async getProductAndTotalCount({ state, commit }, payload) {
        //commit('setLoading', true);

        let searchSolution = {};
        let params = {
            _start:
                Object.keys(payload).length === 0 ? state.page : payload.page,
            _sort:
                Object.keys(payload).length === 0
                    ? state.sort_by
                    : payload.sort_by,
            _limit:
                Object.keys(payload).length === 0
                    ? state.perPage
                    : payload.perPage
        };

        let paramCount = {
            ...searchSolution
        };

        let productURL = `${subBaseUrl}/products?${serializeQuery(params)}`;
        let productCountURL = `${subBaseUrl}/products/count?${serializeQuery(
            paramCount
        )}`;

        const [products, productCount] = await Promise.all([
            Repository.get(productURL),
            Repository.get(productCountURL)
        ]);

        commit('setLoading', true);
        commit('setProducts', products.data);
        commit('setProductsTotal', productCount.data);
        commit('setLoading', false);
    },

    async getSearchResults({ state, commit }, payload) {
        let params = {
            _q: payload.query
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getHomepage({ commit }, slug) {
        commit('setLoading', true);
        let params = {};
        const reponse = await Repository.get(
            `${subBaseUrl}/home-pages/?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setHomepage', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getStoreLocator({ commit, state }, payload) {
        commit('setLoading', true);
        let params = {
            _sort: 'sort_id:desc',
            ...(payload.query && { _q: payload.query })
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/store-locators?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setStoreLocator', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async bookAppointment({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/biotime-africa-partners`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async bookAppointmentExperienceCenter({ commit }, payload) {
        commit('setLoading', true);

        const reponse = await Repository.post(
            `${subBaseUrl}/experience-center-forms`,
            payload
        )
            .then(response => {
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCaseStudyLimit({ commit }) {
        commit('setLoading', true);

        const url = `${subBaseUrl}/case-studies/getCaseStudyByLimit`;

        return await Repository.get(url)
            .then(response => {
                commit('setCaseStudyLimit', response.data);
                commit('setLoading', false);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
    },

    async getProductCategoryBySlug({ commit }, slug) {
        commit('setLoading', true);

        const URL = `${subBaseUrl}/product-categories?slug=${slug}`;
        const reponse = await Repository.get(URL)
            .then(response => {
                commit('setSingleProduct', response.data);
                commit('setLoading', false);
                return response;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
        return reponse;
    }
};
