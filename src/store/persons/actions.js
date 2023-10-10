export const show = stars => {
    return {
        type: 'SHOW',
        payload: stars,
    }
}

export const hide = stars => {
    return {
        type: 'HIDE',
        payload: stars,
    }
}