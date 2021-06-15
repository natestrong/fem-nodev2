#! /usr/bin/env node

import yargs from "yargs";
import fetch from "node-fetch";

const REDDIT_HOME_URL = 'https://reddit.com/.json';

const {argv} = yargs(process.argv);

const url = argv['subreddit'] ? `https://reddit.com/r/${argv['subreddit']}/.json` : REDDIT_HOME_URL;
const limit = argv['limit'] ? argv['limit'] : 10;

async function getPosts(url, limit=null) {
    const res = await fetch(url);
    const posts = (await res.json())['data']['children']
    if (limit) posts.length = limit;
    return posts;
}

const posts = await getPosts(url, limit);

const mapPostToTitle = post => post['data']['title'];
const titles = posts.map(mapPostToTitle)

console.log(titles.join('\n'))

