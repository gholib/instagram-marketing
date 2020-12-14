const instaTouch = require('instatouch');

// (async () => {
//     try {
//         const options = { count: 200 };
//         const likers = await instaTouch.likers('CGtmiJ7BLff', options);
//         console.log(likers.collector[2]);
//     } catch (error) {
//         console.log(error);
//     }
// })();

(async () => {
    try {
        const options = { count: 100};
        const comments = await instaTouch.comments('CGtmiJ7BLff', options);
        console.log(comments.collector[1]);
    } catch (error) {
        console.log(error);
    }
})();