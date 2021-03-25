export const post = (title, body, author, image) => {
    return {
        type: "POST",
        payload: {
            title: title,
            body: body,
            author: author,
            image: image,
        }
    }
};

