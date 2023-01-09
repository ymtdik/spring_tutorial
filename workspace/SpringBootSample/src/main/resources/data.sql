INSERT INTO employee (id, name, age)
VALUES('1', 'TOM', 30) ON DUPLICATE KEY UPDATE id=id;

/* ユーザーマスター */
INSERT INTO m_user (
user_id
,password
,user_name
,birthday
,age
,gender
,department_id
,role
) VALUES
('system@co.jp','$2a$10$qoReOgDBC1VboCr3bbETAeDpziyGb9TCC84HOONlNWQgYoUNSwtn2','システム管理者','2000-01-01',21,1,1,'ROLE_ADMIN')
,('user@co.jp','$2a$10$qoReOgDBC1VboCr3bbETAeDpziyGb9TCC84HOONlNWQgYoUNSwtn2', 'ユーザー1','2000-01-01',21,2,2,'ROLE_GENERAL')
ON DUPLICATE KEY UPDATE user_id=user_id;