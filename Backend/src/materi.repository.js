import db from "./db.js";

export async function semua() {
  const [rows] = await db.query(`
    SELECT
      id,
      judul,
      mata_kuliah AS mataKuliah,
      pertemuan,
      tautan,
      dibuat
    FROM materi
    ORDER BY id ASC
  `);

  return rows;
}
