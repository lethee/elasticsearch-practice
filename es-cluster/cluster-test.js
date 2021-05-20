const { Client } = require('@elastic/elasticsearch');
const _ = require('lodash');

(async () => {
    const client = new Client({
        nodes: [
            'http://localhost:9200',
            'http://localhost:9201',
        ],
    });

    let result = null;

    result = await client.cat.health({ format: 'json', v: true });
    console.log('client.cat.health()');
    console.log(`node.total: ${result.body[0]['node.total']}`);

    // // delete index
    // result = client.indices.delete({ index: 'myindex' })
    // console.log('client.indices.delete()')
    // console.log(result);
    // return

    result = await client.cat.indices({ format: 'json' });
    console.log('client.cat.indices()');
    console.log(result.body);

    if (!_.some(result.body, {index: 'myindex'})) {
        // create index
        result = await client.indices.create({ index: 'myindex' });
        console.log(result.body);
    }

    // insert a document
    let doc = {hello: 'world', t: new Date()};
    result = await client.index({
        index: 'myindex',
        body: doc,
    });
    console.log('client.index()');
    console.log(result.body._id);
    console.log(result.body.result);

    /// test a document on cluster (both node)
    console.log('')
    console.log(`curl localhost:9200/myindex/_doc/${result.body._id}`)
    console.log(`curl localhost:9201/myindex/_doc/${result.body._id}`)
})().catch(err => {
    console.error(err);
});
