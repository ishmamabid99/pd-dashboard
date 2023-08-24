import BASE_URL from "@/env/env";
import { createAlova } from "alova";
import VueHook from "alova/vue";
import GlobalFetch from 'alova/GlobalFetch';


export const authAlova = createAlova({
    baseURL: BASE_URL + "/auth",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        console.log(response)
        response.json();
    }
})
export const blogsAlova = createAlova({
    baseURL: BASE_URL + "/blogs",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        console.log(response);
        response.json();
    }
})
export const issuesAlova = createAlova({
    baseUR: BASE_URL + "/issues",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        response.json();
    }
})
export const tasksAlova = createAlova({
    baseURL: BASE_URL + "/tasks",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        response.json();
    }
})
export const learningsAlova = createAlova({
    baseURL: BASE_URL + "/learnings",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        response.json();
    }
})
export const commentsAlova = createAlova({
    baseURL: BASE_URL + "/comments",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        response.json();
    }
})
export const searchAlova = createAlova({
    baseURL: BASE_URL + "/search",
    requestAdapter: GlobalFetch(),
    statesHook: VueHook,
    responded: (response) => {
        response.json();
    }
})
