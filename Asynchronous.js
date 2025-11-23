function getData(callback) {
  setTimeout(() => {
    callback("Data diterima...");
  }, 1000);
}

getData((msg) => console.log(msg));

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Berhasil ambil data"), 6000);
    setTimeout(() => reject("Gagal ambil data"), 6000);
  });
}

fetchData().then(console.log);

async function run() {
  const data = await fetchData();
  console.log(data);
}
run();
