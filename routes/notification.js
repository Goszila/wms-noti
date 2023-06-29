const express = require('express')
const { io } = require("../app")
const router = express.Router()

router.use((req, res, next) => {
  next()
})

router.get('/', (req, res) => {
  return res.status(200).send({
    success: true,
    payload: [
      {
        id: 1,
        title: 'This AWB No has been created D/O',
        doNumber: '669480',
        mawbNo: '900-12345666',
        hawbNo: 'SG100844711',
        pathUrl: '/Delivery',
        seen: false
      },
      {
        id: 2,
        title: 'This AWB No has been created D/O',
        doNumber: '669480',
        mawbNo: '900-12345678',
        hawbNo: 'SG1008447122',
        pathUrl: '/Delivery',
        seen: false
      },
      {
        id: 3,
        title: 'This AWB No has been created D/O',
        doNumber: '669480',
        mawbNo: '900-12345633',
        hawbNo: 'SG100844714',
        pathUrl: '/Delivery',
        seen: true
      },
      {
        id: 4,
        title: 'This AWB No has been created D/O',
        doNumber: '669480',
        mawbNo: '900-12345655',
        hawbNo: 'SG1008447165',
        pathUrl: '/Delivery',
        seen: true
      },
      {
        id: 5,
        title: 'This AWB No has been created D/O',
        doNumber: '669480',
        mawbNo: '900-12345622',
        hawbNo: 'SG1008447143',
        pathUrl: '/Delivery',
        seen: true
      }
    ]
  })
})

router.post('/', (req, res) => {
  try {
    const { id, title, doNumber, prefix, awb, hawbNo, pathUrl } = req.body
    io.emit('notification', { id, title, doNumber, mawbNo: `${prefix}-${awb}`, hawbNo, pathUrl });
    res.status(200).json({
      success: true
    })
  } catch (error) {
    console.error(error)
    throw error.message
  }
})

module.exports = router