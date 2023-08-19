### Reproduction
1. `pnpm install`
2. `pnpm dev`
3. Visit `/api/json` (eg. http://localhost:3000/api/json)
4. Visit `/api/proxied` (eg. http://localhost:3000/api/proxied)

### Expected result

Both responses are the same

```json
{"hello":"world"}
```

### Observed result

Proxied response is pretty-printed

```json
{
  "hello": "world"
}
```
