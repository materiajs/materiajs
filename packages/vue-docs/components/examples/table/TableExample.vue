<template>
  <div class="table-example">
    <mat-title size="xs">Table example</mat-title>
    <mat-spacer />
    <docs-code :value="code" lang="html" />
    <mat-spacer />
    <mat-table :columns="columns" :rows="rows">
      <template slot="id" slot-scope="{ value }">
        {{ value.value }}
      </template>
    </mat-table>
  </div>
</template>

<script>
export default {
  name: 'TableExample',
  data: () => ({
    code: '<mat-table :columns="columns" :rows="rows">\n'
      + '  <template slot="id" slot-scope="{ value }">\n'
      + '    {{ value.value }}\n'
      + '  </template>\n'
      + '</mat-table>',
    columns: [
      {
        name: 'name',
        header: 'Name',
      },
      {
        name: 'nat',
        header: 'Nationality',
      },
      {
        name: 'gender',
        header: 'Gender',
      },
      {
        name: 'email',
        header: 'Email',
      },
    ],
    rows: [{
      gender: 'female',
      name: 'giuliana laurent',
      location: {
        street: "5999 rue d'abbeville", city: 'klingnau', state: 'bern', postcode: 8813, coordinates: { latitude: '-50.1360', longitude: '31.6397' }, timezone: { offset: '+3:00', description: 'Baghdad, Riyadh, Moscow, St. Petersburg' },
      },
      email: 'giuliana.laurent@example.com',
      login: {
        uuid: '57e89773-ef93-470f-9b0c-552c75dc6092', username: 'smallgoose381', password: '1129', salt: '9KoDa0ZS', md5: '15bf2c441ad54ac0e412a949731052d8', sha1: '3614c13cad8e4632bd1b4a887d4e0dd23eed3910', sha256: '0925c68241cfe34b9bd576b1830197fb87a6faf1405e1fa9b6b9ccfa575da143',
      },
      dob: { date: '1953-04-26T07:05:19Z', age: 66 },
      registered: { date: '2014-12-16T23:39:23Z', age: 4 },
      phone: '(730)-518-0665',
      cell: '(324)-878-7730',
      id: { name: 'AVS', value: '756.7458.8771.76' },
      picture: { large: 'https://randomuser.me/api/portraits/women/46.jpg', medium: 'https://randomuser.me/api/portraits/med/women/46.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/46.jpg' },
      nat: 'CH',
    }, {
      gender: 'female',
      name: 'delphine morin',
      location: {
        street: '3950 3rd st', city: 'greenwood', state: 'nunavut', postcode: 'M9O 9L1', coordinates: { latitude: '61.8258', longitude: '-147.8053' }, timezone: { offset: '+3:00', description: 'Baghdad, Riyadh, Moscow, St. Petersburg' },
      },
      email: 'delphine.morin@example.com',
      login: {
        uuid: 'aa8536db-ebc5-41b6-8edc-c1ca195b1861', username: 'crazygoose939', password: 'coke', salt: 'GvbrBQ3Z', md5: 'b4508fd5bdb828507a76b17b8693da9b', sha1: 'a5ce500b1ce29086708fed2b924f8585edb75b32', sha256: '7f714deb1a4ec43d68018ec535d7c4288fde6d4da1f228cc5c67ee2bde88840b',
      },
      dob: { date: '1986-05-30T17:07:01Z', age: 33 },
      registered: { date: '2017-06-28T22:18:07Z', age: 2 },
      phone: '386-748-8270',
      cell: '169-826-8094',
      id: { name: '', value: null },
      picture: { large: 'https://randomuser.me/api/portraits/women/72.jpg', medium: 'https://randomuser.me/api/portraits/med/women/72.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/72.jpg' },
      nat: 'CA',
    }, {
      gender: 'female',
      name: 'jasmina pfitzner',
      location: {
        street: 'am sportplatz 3', city: 'neukalen', state: 'brandenburg', postcode: 95631, coordinates: { latitude: '-18.1807', longitude: '32.0363' }, timezone: { offset: '+8:00', description: 'Beijing, Perth, Singapore, Hong Kong' },
      },
      email: 'jasmina.pfitzner@example.com',
      login: {
        uuid: 'b85047ad-d345-4ecf-b5c9-c7dd3c02afe3', username: 'whitefish466', password: 'believe', salt: '7OLvFtoW', md5: 'ceecdebb7016f583f9d26d9653946c98', sha1: '8bbd19f37117e75d87973f775ce711127ccb9008', sha256: '04ba22d8da2fbf836d51ff625f456276dafc8fbff2f06153e79f8855994d1b20',
      },
      dob: { date: '1979-06-18T13:56:03Z', age: 40 },
      registered: { date: '2012-04-27T13:04:55Z', age: 7 },
      phone: '0946-7764862',
      cell: '0177-7291927',
      id: { name: '', value: null },
      picture: { large: 'https://randomuser.me/api/portraits/women/82.jpg', medium: 'https://randomuser.me/api/portraits/med/women/82.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg' },
      nat: 'DE',
    }, {
      gender: 'female',
      name: 'luisa van gorkum',
      location: {
        street: '9626 plompetorengracht', city: 'voerendaal', state: 'flevoland', postcode: 37941, coordinates: { latitude: '29.3758', longitude: '122.4107' }, timezone: { offset: '+5:00', description: 'Ekaterinburg, Islamabad, Karachi, Tashkent' },
      },
      email: 'luisa.vangorkum@example.com',
      login: {
        uuid: '1f77f9e6-24d7-4aed-a093-fea95853c2f4', username: 'crazyleopard100', password: 'carman', salt: 'HU4gYf9j', md5: '2fb52f23290c734b648af9289979f1a7', sha1: 'bdff055d1fe067e0da1d7f4c80a452c6bdae7ce0', sha256: '3bc615d2a2c0f9a8b63688971c4a431607179ac86fa7be2301fda7eb6f5c0cd2',
      },
      dob: { date: '1977-05-27T07:52:17Z', age: 42 },
      registered: { date: '2006-03-12T10:12:49Z', age: 13 },
      phone: '(992)-864-1037',
      cell: '(280)-660-8870',
      id: { name: 'BSN', value: '92039698' },
      picture: { large: 'https://randomuser.me/api/portraits/women/16.jpg', medium: 'https://randomuser.me/api/portraits/med/women/16.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/16.jpg' },
      nat: 'NL',
    }, {
      gender: 'female',
      name: 'hilla oja',
      location: {
        street: '1765 pispalan valtatie', city: 'veteli', state: 'southern savonia', postcode: 78634, coordinates: { latitude: '-16.7068', longitude: '57.2436' }, timezone: { offset: '-6:00', description: 'Central Time (US & Canada), Mexico City' },
      },
      email: 'hilla.oja@example.com',
      login: {
        uuid: '9df69cba-7db4-4cc4-a2f3-b0ba9d4bfbe2', username: 'goldenmeercat138', password: 'angelica', salt: 'VphJe1Wp', md5: 'a30c0c4361074a2723a0cad9204c9df5', sha1: 'fe6cee77de82a3766fdc4dc94addaa49a34f0e5b', sha256: 'ec372e5b91d4c50630b6a4a508cca9ef155bb8f50b001fa7b323e12a48bbbec4',
      },
      dob: { date: '1968-08-09T16:08:20Z', age: 50 },
      registered: { date: '2013-12-26T07:56:23Z', age: 5 },
      phone: '06-538-113',
      cell: '044-922-21-11',
      id: { name: 'HETU', value: 'NaNNA760undefined' },
      picture: { large: 'https://randomuser.me/api/portraits/women/54.jpg', medium: 'https://randomuser.me/api/portraits/med/women/54.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/54.jpg' },
      nat: 'FI',
    }, {
      gender: 'male',
      name: 'johan jensen',
      location: {
        street: '45 skovduevej', city: 'nykøbing f', state: 'syddanmark', postcode: 23130, coordinates: { latitude: '-34.1171', longitude: '12.6181' }, timezone: { offset: '-7:00', description: 'Mountain Time (US & Canada)' },
      },
      email: 'johan.jensen@example.com',
      login: {
        uuid: 'ce1d1f23-4809-432e-b4ea-7204b3d1aa0d', username: 'redpeacock875', password: 'patch', salt: 'tI0WLsxd', md5: '2cda6bf780d38119cc61d58ff0554f88', sha1: '2d8086c53d05f5a44dce32f126bb1b252abf4238', sha256: 'b978acaaee0e9f0a95c78afec62b19377b55e0fda771b38e714f8f5978444bd0',
      },
      dob: { date: '1963-08-25T07:44:28Z', age: 55 },
      registered: { date: '2012-01-02T03:01:34Z', age: 7 },
      phone: '09872267',
      cell: '38467010',
      id: { name: 'CPR', value: '974953-4927' },
      picture: { large: 'https://randomuser.me/api/portraits/men/52.jpg', medium: 'https://randomuser.me/api/portraits/med/men/52.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/52.jpg' },
      nat: 'DK',
    }, {
      gender: 'female',
      name: 'iida mattila',
      location: {
        street: '4271 suvantokatu', city: 'nivala', state: 'southern ostrobothnia', postcode: 90361, coordinates: { latitude: '57.2476', longitude: '85.2742' }, timezone: { offset: '+5:30', description: 'Bombay, Calcutta, Madras, New Delhi' },
      },
      email: 'iida.mattila@example.com',
      login: {
        uuid: '0f306eaf-e695-4a43-a9fc-cc4291dc3149', username: 'biggoose932', password: 'ling', salt: '3H0wUAIY', md5: '5eca8a10cacbd86a00a8e67a9bf45975', sha1: '213af200a4bb1630c7fc5b3b7b195ebc5369c20d', sha256: 'f203bf62b6167d5062144435e0adb6282adc379f4705181bbe5c83606c518ad5',
      },
      dob: { date: '1985-02-09T16:53:13Z', age: 34 },
      registered: { date: '2004-03-07T18:00:25Z', age: 15 },
      phone: '07-495-612',
      cell: '042-479-13-96',
      id: { name: 'HETU', value: 'NaNNA782undefined' },
      picture: { large: 'https://randomuser.me/api/portraits/women/61.jpg', medium: 'https://randomuser.me/api/portraits/med/women/61.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg' },
      nat: 'FI',
    }, {
      gender: 'male',
      name: 'luke ryan',
      location: {
        street: '4814 royal ln', city: 'darwin', state: 'northern territory', postcode: 3134, coordinates: { latitude: '-82.3429', longitude: '-16.7356' }, timezone: { offset: '+9:30', description: 'Adelaide, Darwin' },
      },
      email: 'luke.ryan@example.com',
      login: {
        uuid: 'b8986d22-67e3-4442-92ba-0476320b8e25', username: 'beautifulostrich943', password: 'oberon', salt: '1ByMOntt', md5: '614f79e802d634f524a147780cfadd44', sha1: 'd04cbe5ddfb52816f6d802618e4fc20f7e3560a0', sha256: '49f78e7162e7ac8ce72197000b0fe7ab56a95cb7343265071e310a8b1b3437d6',
      },
      dob: { date: '1987-03-15T23:37:43Z', age: 32 },
      registered: { date: '2008-01-31T12:04:47Z', age: 11 },
      phone: '00-1863-6123',
      cell: '0443-890-232',
      id: { name: 'TFN', value: '383922824' },
      picture: { large: 'https://randomuser.me/api/portraits/men/86.jpg', medium: 'https://randomuser.me/api/portraits/med/men/86.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/86.jpg' },
      nat: 'AU',
    }, {
      gender: 'female',
      name: 'jade singh',
      location: {
        street: '4480 3rd st', city: 'hampton', state: 'british columbia', postcode: 'M0A 6H6', coordinates: { latitude: '10.8369', longitude: '175.4701' }, timezone: { offset: '-3:00', description: 'Brazil, Buenos Aires, Georgetown' },
      },
      email: 'jade.singh@example.com',
      login: {
        uuid: 'c9460aab-d598-41fe-843a-c5e79b020eb7', username: 'smallpeacock187', password: '102938', salt: '881OJJm3', md5: 'f1c80bb91fa74cef03edad27c45ef694', sha1: '11534a58acf0607051c7df7801bde059757f13dc', sha256: '01e79a37b36a8223700d34e57728a79a5e04c5583377e79c89199c55f6453a28',
      },
      dob: { date: '1968-05-31T19:30:14Z', age: 51 },
      registered: { date: '2013-07-25T18:40:38Z', age: 5 },
      phone: '234-050-0508',
      cell: '096-430-3097',
      id: { name: '', value: null },
      picture: { large: 'https://randomuser.me/api/portraits/women/89.jpg', medium: 'https://randomuser.me/api/portraits/med/women/89.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg' },
      nat: 'CA',
    }, {
      gender: 'male',
      name: 'aziz poppe',
      location: {
        street: 'uhlandstraße 200', city: 'cham', state: 'berlin', postcode: 42079, coordinates: { latitude: '76.2249', longitude: '17.9285' }, timezone: { offset: '+6:00', description: 'Almaty, Dhaka, Colombo' },
      },
      email: 'aziz.poppe@example.com',
      login: {
        uuid: '57f4c7a5-9eb6-4d8c-ae8f-5c68c816ec1a', username: 'happymeercat418', password: 'blues1', salt: 'N6CfFisK', md5: '2606cf532f67ca1b678cab25e072c3cf', sha1: '9143201147f4ef2fe8b638894b01a13e57f723df', sha256: 'ed071a59a709006fca90a7b04d59f9145704a503cf399359902b6a5cc3693f4b',
      },
      dob: { date: '1985-04-18T19:07:31Z', age: 34 },
      registered: { date: '2004-11-10T04:02:12Z', age: 14 },
      phone: '0001-0178914',
      cell: '0172-9060042',
      id: { name: '', value: null },
      picture: { large: 'https://randomuser.me/api/portraits/men/84.jpg', medium: 'https://randomuser.me/api/portraits/med/men/84.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg' },
      nat: 'DE',
    }],
  }),
};
</script>

<style scoped>

</style>
