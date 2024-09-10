# Install

- `npm install body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1`
- `npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7`
- `npx sequelize-cli init`
- `node_modules/.bin/sequelize init`
- https://mherman.org/blog/node-postgres-sequelize/

## Tóm tắt video 20

- Dùng câu lệnh: `npx sequelize-cli init`. Hoặc tạo file .sequelizerc và dùng lệnh `npx sequelize-cli init` để tạo các file config, thư mục seeders, migrations, models, ...
  - Các file model để tạo model database (giống như Object để mình tương tác với database)
  - File config cấu hình thông tin môi trường database (Ví dụ: chạy trên môi trường development, trong môi trường này sẽ dùng database là gì). Trong file index.js của thư mực models sẽ có cấu hình môi trường thông qua: `process.env.NODE_ENV`
  - Migration đại loại dùng để chứa thông tin update, tạo trên database.
  - seeders để tạo dữ liệu cho database update lên database.

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

- Câu lệnh này tạo ra mô models user gồm 3 trường firstName, lastName, email, trên database sẽ tự động tạo thêm 2 trường createdAt và updatedAt.
- `npx sequelize-cli db:seed:all` thêm dữ liệu seeder vào database.
- `npx sequelize-cli seed:generate --name demo-user` tạo file dữ liệu seed trong thư mục seeder.
- https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
- CORS Resolve: `https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked`
- Bên backend nếu trả status code là 500 thì bên frontend sẽ tự hiểu là error và sẽ chạy vào catch, không chạy trong try.
- https://stackoverflow.com/questions/26228499/setting-all-queries-to-raw-true-sequelize (Thiết lập raw == true cho tất cả các câu truy vấn)
- Trong file `config.json`:

```
  "timezone": "+07:00",
  "query": {
    "raw": true
  }
```

- Trong đó: timezone để quy định múi giờ. Query raw = true để cấu hình raw = true cho tất cả các câu truy vấn, giúp nhìn dữ liệu bên phía server dễ hơn, để mỗi lần mình viết query, không nhất thiết thêm raw = true nữa.
- npx sequelize-cli db:migrate --to migration-create-user.js

-

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('ROLE','R1','Admin', 'Quản trị viên', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('ROLE','R2','Doctor', 'Bác sĩ', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('ROLE','R3','Patient', 'Bệnh nhân', "2024-07-09", "2024-07-09" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('STATUS','S1','New', 'Lịch hẹn mới', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('STATUS','S2','Confirmed', 'Đã xác nhận', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('STATUS','S3','Done', 'Đã khám xong', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('STATUS','S4','Cancel', 'Đã hủy', "2024-07-09", "2024-07-09" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T1','8:00 AM - 9:00 AM', '8:00 - 9:00', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T2','9:00 AM - 10:00 AM', '9:00 - 10:00', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T3','10:00 AM - 11:00 AM', '10:00 - 11:00', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T4','11:00 AM - 0:00 PM', '11:00 - 12:00', "2024-07-09", "2024-07-09" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T5','1:00 PM - 2:00 PM', '13:00 - 14:00', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T6','2:00 PM - 3:00 PM', '14:00 - 15:00', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T7','3:00 PM - 4:00 PM', '15:00 - 16:00', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('TIME','T8','4:00 PM - 5:00 PM', '16:00 - 17:00', "2024-07-09", "2024-07-09" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('POSITION','P0','None', 'Bác sĩ', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('POSITION','P1','Master', 'Thạc sĩ', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('POSITION','P2','Doctor', 'Tiến sĩ', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('POSITION','P3','Associate Professor', 'Phó giáo sư', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('POSITION','P4','Professor', 'Giáo sư', "2024-07-09", "2024-07-09" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('GENDER','M','Male', 'Nam', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('GENDER','F','Female', 'Nữ', "2024-07-09", "2024-07-09" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('GENDER','O','Other', 'Khác', "2024-07-09", "2024-07-09" );

# Hàm differenceWith

- Trong lodash có phương thức differenceWith, cú pháp:

```
_.differenceWith(a, b, arrow_function(alias_a, alias_b) => {
  return ...
})
```

- Lấy từng phần tử trong a và từng phần tử trong b đối chiếu thông qua arrow_function, nếu arrow function trả về false, nghĩa là phần tử chưa tồn tại trong mảng b, sẽ giữ lại phần tử đó.

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI1','10', '200000', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI2','15', '250000', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI3','20', '300000', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI4','25', '350000', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI5','30', '400000', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI6','35', '450000', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PRICE','PRI7','40', '500000', "2024-07-25", "2024-07-25" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PAYMENT','PAY1','Cash', 'Tiền mặt', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PAYMENT','PAY2','Credit card', 'Thẻ ATM', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PAYMENT','PAY3','All payment method', 'Tất cả', "2024-07-25", "2024-07-25" );

INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO1','Ha Noi', 'Hà Nội', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO2','Ho Chi Minh', 'Hồ Chí Minh', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO3','Da Nang', 'Đà Nẵng', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO4','Can Tho', 'Cần Thơ', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO5','Binh Duong', 'Bình Dương', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO6','Dong Nai', 'Đồng Nai', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO7','Quang Ninh', 'Quảng Ninh', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO8','Hue', 'Thừa Thiên Huế', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO9','Quang Binh', 'Quảng Bình', "2024-07-25", "2024-07-25" );
INSERT INTO ALLCODES (ALLCODES.type,ALLCODES.keyMap, ALLCODES.valueEn, ALLCODES.valueVi, ALLCODES.createdAt, ALLCODES.updatedAt) values ('PROVINCE','PRO10','Khanh Hoa', 'Khánh Hòa', "2024-07-25", "2024-07-25" );

- https://stackoverflow.com/questions/24165410/nodemailer-send-base64-data-uri-as-attachment-how
- nodejs send image base64 as attachment
