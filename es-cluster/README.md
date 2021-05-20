# ElasticSearch Cluster with docker-compose

## docker-compose

To start:

```bash
docker-compose up -d
```

To test:

```bash
npm i
node cluster-test.js
```

To delete:

```bash
docker-compose down
```

## Etc

**Problem - vm.max_map_count error:**

See <https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#_set_vm_max_map_count_to_at_least_262144>

(참고로 docker for mac의 linux tty 접근은 <https://gist.github.com/BretFisher/5e1a0c7bcca4c735e716abf62afad389> 여기에)
