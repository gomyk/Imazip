# Imazip
[WebApplication] Search and Download Images as zip file

## Used NPM Package

[express](https://www.npmjs.com/package/express) : Fast, unopinionated, minimalist web framework<br>
[request](https://www.npmjs.com/package/request) : Simplified HTTP request client<br>
[cheerio](https://www.npmjs.com/package/cheerio) : Tiny, fast, and elegant implementation of core jQuery designed specifically for the server<br>
[image-downloader](https://www.npmjs.com/package/image-downloader) : A Nodejs module for downloading image to disk from a given URL
<br>
[zip-folder](https://www.npmjs.com/package/zip-folder) : Zips a folder and calls your callback when it's done<br>
[async](https://www.npmjs.com/package/anync) : Higher-order functions and common patterns for asynchronous code<br>

## Main Page 
(HTML5 Template (https://html5up.net/dimension))
![capture](https://user-images.githubusercontent.com/24787741/29771204-93f5cc66-8c2d-11e7-83ba-1c68c86b836c.PNG)


## Motive

 This project is web application coded by node.js. Purpose of making this site is when we want to downloading Image within the web site, we have to download each image one by one. But it can be a very tiresome work. So this web site can download Images that you want to as one zip file, in a one time. 

## How to use

 First typing the words that you want to search as a image and click the search button.

 Then you can see the searching result Images with check box that I crwal from the 'bing' site. 
 Choose the Images that you wants to download by checking the box that next to Image.

 After choosing the Images, click the download button.
 Then the zip file will download to your desktop, default Download folder.

## Simple Explanation

 When client sent the words that wants to seacrh, Server will be crwaling the Image URL that client wants on 'bing' site.

 Then spread the Images on web site with checkbox.

 after click the download button, download Images on server's memory As a zip file and send it to client.
