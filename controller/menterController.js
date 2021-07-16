const { parse } = require('json2csv');

module.exports.fetchMenter = async (req, res) => {
  let jsonData = [];
  mentors = true;
  var item = 0;
  while (mentors) {
    console.log(item);
    data = GrowthMentor.fetchUsers(offset);

    jsonData.push(...data.data.results);

    if (data.data.results.length <= 0) {
      console.log(data.data.results);

      mentors = false;
    }
    item++;
  }
  const fields = [
    { label: 'Id', value: 'id' },
    { label: 'Email', value: 'email' },
    { label: 'Name', value: 'name' },
    { label: 'first Name', value: 'first_name' },
  ];
  const opts = { fields };

  try {
    const csv = parse(jsonData, opts);
    console.log(csv);
  } catch (err) {
    console.error(err);
  }

  return res.status(200).json({
    status: true,
    jsonData,
  });
};
