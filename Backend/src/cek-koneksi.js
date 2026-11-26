import db from "./db.js";

try {
  const [rows] = await db.query(
    "SELECT VERSION() AS versi, DATABASE() AS db, CURRENT_USER() AS pengguna",
  );

  console.log("Koneksi database berhasil!");
  console.log(rows[0]);
} catch (error) {
  console.error("Koneksi database gagal!");
  console.error("Kode error:", error.code);
  console.error(error.message);
} finally {
  await db.end();
}
