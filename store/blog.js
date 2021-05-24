// import data from '~/static/data/blog-grid.json';

export const state = () => ({
    blog: []
});

export const getters = {
    getAllPosts: state => state.blog,
    getNewestPost: state => state.blog.slice(0, 5)
};

export const mutations = {};

export const actions = {};
