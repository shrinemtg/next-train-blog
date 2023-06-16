import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "train-blog",
  // TODO APIキーの取得の方法確認（envファイルを使う場合）
  // apiKey: process.env.API_KEY,
  apiKey: "mQezLvzfWQ6UC26qcGZaPPrRDFcGjNk0oJNe",
});
