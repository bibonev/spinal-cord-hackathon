import {Router} from 'express'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

router.get('/temperature', function (req, res) {
    res.json({
        temperature: [
            [
                8, 37
            ],
            [
                9, 36.5
            ],
            [
                10, 36
            ],
            [
                11, 36.5
            ],
            [
                12, 37.5
            ],
            [
                13, 38
            ],
            [14, 36.9]
        ]
    });
});

router.get('/movement', function (req, res) {
    res.json({
        movement: [
            [
                8, 9
            ],
            [
                9, 12
            ],
            [
                11, 7
            ],
            [
                11, 14
            ],
            [
                12, 1
            ],
            [
                13, 19
            ],
            [14, 4]
        ]
    });
});

router.get('/pressure', function (req, res) {
    res.json({
        pressure: [
            [
                8, 0
            ],
            [
                9, 1
            ],
            [
                10, 12
            ],
            [
                11, 12
            ],
            [
                12, 4
            ],
            [
                13, 6
            ],
            [14, 17]
        ]
    });
});

export default router
