async function downloadLaunchData() {
  const response = await fetch("http://api.spacexdata.com/v3/launches", {
    method: "GET"
  });

  const lauchData = await response.json();
  console.log(lauchData)
}

await downloadLaunchData();