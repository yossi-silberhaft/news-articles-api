'use strict';

const axios = require('axios');

const express = require('express');
const router = express.Router();
const GeneralController = require('../controllers/generalController');
const {getNews, getTopHeadlines} = require('../services/newsapi');
const API_KEY = 'd06cdd7c8b334597937526058d954857';

router.get('/health', GeneralController.getHealth);

router.get('/headlines', async (req, res) => {
  console.log('Attempting to get top headlines');
  try {
    const headlines = await getTopHeadlines();
    return res.status(200).json(headlines);
  } catch (err) {
    console.error(err);
    return res.status(500).json({message: `Failed to get top headlines: ${err}`});
  }
});

router.get('/news', async (req, res) => {
  const { limit } = req.query;
  try {
    const newsArticles = await getNews(limit)
    return res.status(200).json(newsArticles);

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
});


module.exports = router;
