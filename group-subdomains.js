const data = [
    ["23", "google.com.mx" ],
    ["23", "org" ],
    ["44", "google.co.uk" ],
    ["12", "mobile.sports.yahoo.com" ],
    ["53", "yahoo.com.mx" ],
    ["37", "essence.com"],
    ["91", "news.msn.com" ],
    ["15", "news.yahoo.mx" ],
    ["68", "sports.google.com" ],
];

getSubdomains = (domain) => {
    let all = domain.split('.');
    const total = all.length;
    let left = 0;
    let subdomains = [];

    while (left < total) {
        subdomains.push(all.join('.'));

        all.splice(0, 1);

        left++;
    }

    return subdomains;
}

const results = {};

data.forEach(entry => {
    let [hits, domain] = entry;

    hits = parseInt(hits, 10);

    getSubdomains(domain).forEach(sub => {
        results[sub] = results[sub] ? results[sub] + hits : hits;
    });
});

results;
