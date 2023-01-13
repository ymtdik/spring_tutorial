# spring_tutorial

**概要**  
Spring解体新書第二版の学習用  
書籍とはSpringのバージョンやDB(書籍ではH2)が異なるため書籍のサンプルコードとはところどころ差異がある  
DBをMySQLにした理由は特にない。書籍と全く同じだとつまらないかなって

## バージョン
- Java OpenJDK12
- Spring Boot 2.7.5
- MySql 8.0.31

## 書籍と異なる点
- 初期化時のSQLの指定方法
  - バージョンアップによりapplication.propertiesの記述方法が変更された
- SecurityConfigの書き方変更
  - WebSecurityConfigurerAdapterがdeprecatedとなったため書き方が大幅に変わった。当書籍最大のはまりポイント
  
このあたりは先駆者様の記事を参考にした。そちらのほうが詳しいのでここでは割愛。この記事通りに書けばだいたいいけるはず
https://qiita.com/okaponta_/items/41202cf385de1fe4c379  
https://qiita.com/okaponta_/items/de1e640037b89b3ad6ca  
https://qiita.com/suke_masa/items/908805dd45df08ba28d8  

- DBをMySQLにしたためDB初期データ投入時にエラーになる

H2と違いMySQLはアプリを終了してもデータが残り書籍通りの初期化クエリだとDuplicateエラーになるため、Insert文に`ON DUPLICATE KEY UPDATE`句を追記
https://github.com/ymtdik/spring_tutorial/blob/master/workspace/SpringBootSample/src/main/resources/data.sql#L17
