# express-api
CRUD API

Langkah 1 - Install Node.js
Pertama, silahkan untuk melakukan installasi Node.js di dalam komputer teman-teman semuanya, untuk installasi Node.js silahkan bisa mengikuti dari situs resiminya di : https://nodejs.org/en/download/.

Untuk mengetahui apakah komputer kita sudah terinstall Node.js, kita bisa menjalankan perintah berikut ini di dalam terminal/CMD :

<img width="721" alt="npm-node" src="https://user-images.githubusercontent.com/87469794/130326884-bf06ad0e-2115-4d27-8ea9-cc8b9cfbd75c.png">

Langkah 2 - Membuat Project Express.js
Setelah Node.js berhasil terinstall di dalam komputer, maka sekarang kita lanjutkan untuk membuat project Express.js.

Silahkan masuk ke dalam folder dimana teman-teman menyimpan project-nya, kemudian jalankan perintah berikut ini di dalam terminal/CMD :

# mkdir express-api
Perintah mkdir di atas digunakan untuk membuat sebuah direktori / folder baru dan nama folder tersebut adalah express-api.

Setelah folder berhasil terbuat, sekarang kita akan masuk ke dalam folder tersebut menggunakan perintah berikut ini :
# cd express-api

jika sudah berada di dalam folder express-api, maka sekarang kita akan lanjutkan untuk membuat project Express.js baru. Silahkan jalankan perintah berikut ini di dalam terminal/CMD :
# npm init

Ketika kita menjalankan perintah di atas, maka kita akan mendapatkan beberapa pertanyaan, silahkan ikuti langkah-langkahnya seperti berikut ini :

![image](https://user-images.githubusercontent.com/87469794/130326986-845ded1b-1d05-4128-9992-30b20aea3311.png)

Maka akan keluar ouput seperti berikut ini :
![image](https://user-images.githubusercontent.com/87469794/130327006-304ebda7-78f1-4118-94c3-460431eb4ee5.png)

Kemudian ada pertanyaan lagi Is this OK? (yes). Silahkan ENTER. Jika berhasil maka kita akan mendapatkan 1 file baru dengan nama package.json dengan isi sama seperti di atas.

Sekarang, kita lanjutkan untuk melakukan installasi Express.js. Silahkan jalankan perintah berikut ini di dalam terminal/CMD dan pastikan berada di dalam folder express-api.

# npm install express@4.17.1 --save

Langkah 3 - Membuat Main File Express.js
Sekarang kita akan menambahkan main file dari Express.js dan menambahkan 1 route untuk mencobanya di dalam web browser. Silahkan buat file baru dengan nama index.js dan masukkan kode berikut ini di dalamnya.

![image](https://user-images.githubusercontent.com/87469794/130327042-eaca03ee-6825-420a-b4a3-090c779d4a67.png)

Langkah 4 - Menjalankan Project Express.js
Setelah berhasil menambahkan file main dari project Express.js, sekarang kita akan belajar menjalankan project tersebut. Silahkahkan jalankan perintah berikut ini di dalam terminal/CMD dan pastikan berada di dalam folder express-api :

# node index.js
Jika muncul tulisan app running at http://localhost:3000. Artinya aplikasi Express.js kita telah berhasil dijalankan dan kita bisa melihatnya di dalam web browser di http://localhost:3000 dan jika berhasil maka kurang lebih tampilannya seperti berikut ini :

![image](https://user-images.githubusercontent.com/87469794/130327265-3a3a1324-d0cf-425f-8299-6ea921b2136c.png)

Langkah 5 - Installasi Nodemon
Nodemon merupakan library yang akan membantu developer dalam pengembangan aplikasi terutama berbasis Node.js. Karena Nodemon akan melakukan restart secara otomatis terhadapap aplikasi yang dijalankan ketika ada perubahan kode yang dilakukan.

Disini kita akan menginstall library Nodemon secara global di dalam komputer, silahkan jalankan perintah berikut ini di dalam terminal/CMD :

# npm install -g nodemon

Sekarang, untuk menjalankan project Express.js, kita gunakan perintah seperti berikut ini :
# nodemon npm start

![image](https://user-images.githubusercontent.com/87469794/130327314-dbb262a4-2a73-4971-816b-2154ec90fbce.png)

Sekarang, jika ada perubahan yang kita lankukan di dalam project, maka Nodemon akan otomatis melakukan restart secara otomatis.


