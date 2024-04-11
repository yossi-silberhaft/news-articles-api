'use strict';

const axios = require('axios');
const API_KEY = 'd06cdd7c8b334597937526058d954857';

const getTopHeadlines = async () => {
  const top_headlines_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(top_headlines_url);
    console.log(`Received ${response.data.articles.length} results of top headlines`);
    return response.data;
  } catch (err) {
    console.error(`Failed to get top headlines: ${err}`);
    throw err
  }
}

const getNews = async (desiredResults = 10) => {
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-11&sortBy=publishedAt&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    let finalData = response.data;
    finalData.articles = getRandomItems(response.data.articles, desiredResults);
    finalData.totalResults = finalData.articles.length;
    return finalData
  } catch (err) {
    console.error(`Failed to get top headlines: ${err}`);
    throw err
  }
};

function getRandomItems(arr, count) {
  let tempArray = [...arr];

  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]]; // ES6 destructuring swap
  }

  return tempArray.slice(0, count);
}

module.exports = {
  getTopHeadlines,
  getNews
};

