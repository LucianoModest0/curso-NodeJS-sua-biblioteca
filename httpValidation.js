import fetch from "node-fetch";

function handlingError(err) {
  throw new Error(err.message);
}

async function checkStatus(arrURLs) {
  try {
    const arrStatus = await Promise.all(
      arrURLs.map(async (url) => {
        const res = await fetch(url);
        return `${res.status} - ${res.statusText}`;
      })
    );
    return arrStatus;
  } catch (err) {
    handlingError(err);
  }
}

function createURLsArr(arrLinks) {
  return arrLinks.map((objectLink) => Object.values(objectLink).join());
}

export default async function validURLs(arrLinks) {
  const links = createURLsArr(arrLinks);
  const statusLinks = await checkStatus(links);

  const results = arrLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index],
  }));
  return results;
}
