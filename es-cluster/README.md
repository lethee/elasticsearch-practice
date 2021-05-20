# ElasticSearch Cluster with docker-compose

## docker-compose

To start:

```bash
docker-compose up -d
```

To delete:

```bash
docker-compose down
```

## Etc

**Problem - vm.max_map_count error:**

See <https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#_set_vm_max_map_count_to_at_least_262144>