const axios = require('axios');
const { parse } = require('json2csv');

module.exports.fetchMenter = async (req, res) => {
  let jsonData = [];
  mentors = true;
  var item = 0;
  while (mentors) {
    console.log(item);
    const payload = {
      specialties: {
        value: [],
        option: 'must',
      },
      availability: {
        value: [],
        option: 'should',
      },
      price: {
        value: null,
        option: 'must',
      },
      industries: {
        value: [],
        option: 'must',
      },
      languages: {
        value: [],
        option: 'must',
      },
      companies: {
        value: [],
        option: 'must',
      },
      coaches: {
        value: null,
        option: 'must',
      },
      software_specialties: {
        value: [],
        option: 'must',
      },
      hours: {
        value: [],
        option: 'must',
      },
      days: {
        value: [],
        option: 'must',
      },
      size: 15,
      offset: item,
      sort: {
        field: '_score',
        order: 'desc',
      },
    };
    const data = await axios.patch(
      'https://app.growthmentor.com/search',
      payload,
      {
        headers: {
          Connection: 'keep-alive',
          'sec-ch-ua':
            '"Not;ABrand";v="99","GoogleChrome";v="91","Chromium";v="91"',
          Accept: 'application/json,text/plain,/',
          'X-CSRF-TOKEN':
            'Pr0FngISQc73NEV9JQRUdEuHvkwoHeFK8yTUs/GPX44zDJgmeCbJVM9ZAvDe/KxyT0hg/DhFljfht7nTT1Hp5w==',
          'X-Requested-With': 'XMLHttpRequest',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0(Macintosh;IntelMacOSX10_15_7)AppleWebKit/537.36(KHTML,likeGecko)Chrome/91.0.4472.114Safari/537.36',
          'Content-Type': 'application/json;charset=UTF-8',
          Origin: 'https://app.growthmentor.com',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          Referer: 'https://app.growthmentor.com/search',
          'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8',
          Cookie:
            '_gcl_au=1.1.293213996.1625210703;traffic_src={"ga_gclid":"","ga_source":"(direct)","ga_medium":"(none)","ga_campaign":"","ga_content":"","ga_keyword":"","ga_landing_page":"https://app.growthmentor.com/search"};_hjid=b98b5c90-2536-4dc8-9386-2191f35a20e6;_fbp=fb.1.1625210704833.233670244;_rdt_uuid=1625210713672.4dec125a-8127-4a8c-a2cc-05f3e185570c;gs_v_GSN-829204-P=;timezone=Asia/Calcutta;_gid=GA1.2.2024183795.1626152252;ajs_anonymous_id=d456cb85-bcc1-416d-bad7-65bee945907b;_hjTLDTest=1;gs_u_GSN-829204-P=4aff88e67d7e2a5cd46d39ca56da0b4c:4211:6137:1626152532553;_ga_PRHF0P09M3=GS1.1.1626179948.3.0.1626179948.0;_ga=GA1.2.1679126604.1625210703;_gat_UA-108708997-1=1;mp_0f10c789dd912ba8885c9915f0e0913b_mixpanel=%7B%22distinct_id%22%3A%20%2217a661b4f4f337-05d2d615a48bc8-34647600-13c680-17a661b4f504e%22%2C%22%24device_id%22%3A%20%2217a661b4f4f337-05d2d615a48bc8-34647600-13c680-17a661b4f504e%22%2C%22traffic_source%22%3A%20%22(direct)%22%2C%22traffic_medium%22%3A%20%22(none)%22%2C%22traffic_campaign%22%3A%20%22(not%20set)%22%2C%22traffic_content%22%3A%20%22(not%20set)%22%2C%22traffic_term%22%3A%20%22(not%20set)%22%2C%22traffic_landing_page%22%3A%20%22https%3A%2F%2Fapp.growthmentor.com%2Fsearch%22%2C%22traffic_gclid%22%3A%20%22(not%20set)%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22mp_lib%22%3A%20%22Segment%3A%20web%22%7D;_hjIncludedInPageviewSample=1;_hjAbsoluteSessionInProgress=0;_drip_client_8380513=vid%253D0fe1625866624fa69ee7967c1c9bd920%2526pageViews%253D7%2526sessionPageCount%253D1%2526lastVisitedAt%253D1626179954639%2526weeklySessionCount%253D2%2526lastSessionAt%253D1626179954639;_growthmentor_session=RVdUN1hlS0M0TDZYTFRxbk03ZmhHbzdRRHZLTTM1R0NyajZLemFnYVdyZ25HZDBjeUZyWHRTRGxsWCtSci9wZThNQmpUZUltR0s5WnNmKzAxZ2hONEFXWi9OMlV1OW9vaUtrK2dDak9lTWNNWTg4TFg1MDA4R2RycWtiZkJkU2YyYTl4VkpvbU5RcVpQbUEyNURXMExRPT0tLVZXeTZlK21lcFpyWnVZWE9ra0ZQL0E9PQ%3D%3D--2ba6ea06a5cf5e34cba82613dc93bd9dcd48a1ef',
        },
      }
    );

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
