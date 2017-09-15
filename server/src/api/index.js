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
                8,
                getRandomArbitrary(35, 38)
            ],
            [
                9,
                getRandomArbitrary(35, 38)
            ],
            [
                10,
                getRandomArbitrary(35, 38)
            ],
            [
                11,
                getRandomArbitrary(35, 38)
            ],
            [
                12,
                getRandomArbitrary(35, 38)
            ],
            [
                13,
                getRandomArbitrary(35, 38)
            ],
            [
                14,
                getRandomArbitrary(35, 38)
            ]
        ]
    });
});

router.get('/movement', function (req, res) {
    res.json({
        movement: [
            [
                8,
                getRandomArbitrary(10, 20)
            ],
            [
                9,
                getRandomArbitrary(10, 20)
            ],
            [
                11,
                getRandomArbitrary(10, 20)
            ],
            [
                11,
                getRandomArbitrary(10, 20)
            ],
            [
                12,
                getRandomArbitrary(10, 20)
            ],
            [
                13,
                getRandomArbitrary(10, 20)
            ],
            [
                14,
                getRandomArbitrary(10, 20)
            ]
        ]
    });
});

router.get('/humidity', function (req, res) {
    res.json({
        humidity: [
            [
                8,
                getRandomArbitrary(0, 15)
            ],
            [
                9,
                getRandomArbitrary(0, 15)
            ],
            [
                10,
                getRandomArbitrary(0, 15)
            ],
            [
                11,
                getRandomArbitrary(0, 15)
            ],
            [
                12,
                getRandomArbitrary(0, 15)
            ],
            [
                13,
                getRandomArbitrary(0, 15)
            ],
            [
                14,
                getRandomArbitrary(0, 15)
            ]
        ]
    });
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default router
