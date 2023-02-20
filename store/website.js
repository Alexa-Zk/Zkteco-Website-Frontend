import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl, subBaseUrl } from '~/repositories/Repository';

export const state = () => ({
    products: null,
    productsRelated: null,
    singleProduct: null,
    solutions: null,
    solutionCategoriesAndSub: null,
    caseStudies: null,
    articles: null,
    articlesLimited: null,
    articlesCategories: null,
    singleArticlesCategories: null,
    productsTotal: 0,
    articlesTotal: 0,
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
    solutionTotal: 0
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

    setSingleArticlesCategories(state, payload) {
        state.singleArticlesCategories = payload;
    },

    setSingleProductCategories(state, payload) {
        state.singleProductCategories = payload;
    },

    // setProductCategories(state, payload) {
    //     state.productCategories = payload;
    // },

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
        const reponse = await Repository.get(URL)
            .then(response => {
                commit('setArticles', response.data);
                commit('setLoading', false);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));

        return reponse;
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

    async getArticlesLimited({ commit }, payload) {
        commit('setLoading', true);
        let params = {
            _start: 0,
            _sort: 'created_at:desc',
            _limit: 4
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/articles?${serializeQuery(params)}`
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
            _sort: 'sort_id:desc',
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
        //getSingleProductCategories
        //https://admin.zkteco-wa.com/products?_limit=2&product_category.slug=time-attendance&_start=1

        // commit('setLoading', true);
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
            'product_category.slug': payload.slug
        };

        let paramCount = {
            'product_category.slug': payload.slug
        };

        let productCategoryCountURL = `${subBaseUrl}/products/count?${serializeQuery(
            paramCount
        )}`;

        const productGet = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        );

        let productCount = await Repository.get(productCategoryCountURL);

        // let product = productGet;
        // let count = productCount;

        commit('setSingleProductCategories', productGet.data);
        commit('setTotalSingleProductCategories', productCount.data);

        /*
        const reponse = await Repository.get(
            `${subBaseUrl}/products?${serializeQuery(params)}`
        )

            .then(response => {
                const data = response.data;
                commit('setSingleProductCategories', data);
                commit('setLoading', false);
                return data;
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));

        */

        /***
             * 
        
            let paramCount = {
                'product_category.slug': payload.slug
            };

            let productCategoryURL = `${subBaseUrl}/products?${serializeQuery(
                params
            )}`;
            let productCategoryCountURL = `${subBaseUrl}/products/count?${serializeQuery(
                paramCount
            )}`;



            let productCategoryURL = `${subBaseUrl}/products?${serializeQuery(
                params
            )}`;
            let productCategoryCountURL = `${subBaseUrl}/products/count?${serializeQuery(
                paramCount
            )}`;

            try {
                let productCategory = Repository.get(productCategoryURL);
                let productCategoryCount = Repository.get(
                    productCategoryCountURL
                );

                let product = await productCategory;
                let count = await productCategoryCount;

                commit('setSingleProductCategories', product.data);
                commit('setTotalSingleProductCategories', count.data);
              
            
             */

        return productGet.data;
    },

    async getCategoryAndSubCategories({ commit }) {
        commit('setLoading', true);
        const reponse = await Repository.get(
            `${subBaseUrl}/product-categories/categoryAndSubcategory`
        )
            .then(response => {
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

    async getArticlesCategories({ commit }) {
        // commit('setLoading', true);
        // const reponse = await Repository.get(`${subBaseUrl}/categories/`)
        //     .then(response => {
        //         commit('setArticlesCategories', response.data);
        //         commit('setLoading', false);
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return [];
    },

    async getProductCategories({ state, commit }, payload) {
        try {
            commit('setLoading', true);

            //let searchProduct = {};
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
                'product_category.slug': payload.slug
            };

            let paramCount = {
                'product_category.slug': payload.slug
            };

            let productCategoryURL = `${subBaseUrl}/products?${serializeQuery(
                params
            )}`;
            let productCategoryCountURL = `${subBaseUrl}/products/count?${serializeQuery(
                paramCount
            )}`;

            try {
                let productCategory = Repository.get(productCategoryURL);
                let productCategoryCount = Repository.get(
                    productCategoryCountURL
                );

                let product = await productCategory;
                let count = await productCategoryCount;

                commit('setSingleProductCategories', product.data);
                commit('setTotalSingleProductCategories', count.data);

                /*
                return await Promise.allSettled([product, count])
                    .then(res => {
                        commit('setSingleProductCategories', res[0].value.data);
                        commit(
                            'setTotalSingleProductCategories',
                            res[1].value.data
                        );
                        commit('setLoading', false);
                    })
                    .catch(error => ({
                        error: JSON.stringify(error)
                    }));
                    */
                return product.data;
            } catch (error) {
                console.log('sub categories', error);
            }
            // return reponse;
        } catch (error) {
            console.log(error);
        }
    },

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
        commit('setLoading', true);
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
            'product_sub_category.slug': payload.slug
        };

        let paramCount = {
            'product_sub_category.slug': payload.slug
        };

        let subProductURL = `${subBaseUrl}/products/?${serializeQuery(params)}`;
        let subProductCountURL = `${subBaseUrl}/products/count?${serializeQuery(
            paramCount
        )}`;

        const subProduct = await Repository.get(subProductURL);
        const subProductCount = await Repository.get(subProductCountURL);

        commit('setSubProductCategories', subProduct.data);
        commit('setTotalSingleProductCategories', subProductCount.data);

        // await Promise.all([subProduct, subProductCount]).then(value => {
        //     // console.log('product: ', value[0].data);
        //     // console.log('Count: ', value[1].data);

        //     commit('setSubProductCategories', value[0].data);
        //     commit('setTotalSingleProductCategories', value[1].data);
        //     commit('setLoading', false);
        // });
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

    // async getTotalSubCategories({ commit }, slug) {
    //     let params = {
    //         'product_sub_category.slug': slug
    //     };
    //     const reponse = await Repository.get(
    //         `${subBaseUrl}/products/count?${serializeQuery(params)}`
    //     )
    //         .then(res => {
    //             commit('setTotalSingleProductCategories', res.data);
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // },

    async getSolutionCategories({ commit }, payload) {
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
        const res = Repository.get(url);
        const count = Repository.get(urlCount);

        await Promise.all([res, count]).then(value => {
            commit('setSolutionCategories', value[0].data);
            commit('setSolutionCategoryTotal', value[1].data);
            commit('setLoading', false);
        });
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
        commit('setLoading', true);

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

        const products = await Repository.get(productURL);
        const productCount = await Repository.get(productCountURL);

        await Promise.all([products, productCount])
            .then(value => {
                //console.log('Pdt', value[0].data);
                //console.log('Count', value[1].data);

                commit('setProducts', value[0].data);
                commit('setProductsTotal', value[1].data);
                commit('setLoading', false);
            })
            .catch(error => ({
                error: JSON.stringify(error)
            }));
    },

    async getArticlesTotal({ state, commit }, payload) {
        let params = {
            _limit: -1
        };
        const reponse = await Repository.get(
            `${subBaseUrl}/articles?${serializeQuery(params)}`
        )
            .then(response => {
                commit('setArticlesTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
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
    }
};
