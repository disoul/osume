import Storage from 'react-native-storage';

const OriginUrl = 'https://osu.ppy.sh/api/get_user?k=c5a70a25c2f6aee14379c7a25a04b1243f8378c1';

var storage = new Storage({
  defaultExpires: 1000 * 3600 * 6,
  sync: {
    userState(params) {
      let { id, resolve, reject } = params;
      fetch(OriginUrl + '&u=' + id, {
        method: 'GET',
      }).then( response => {
        return response.json();
      }).then( res => {
        if (res) {
          storage.save({
            key: 'userState',
            id,
            rawData: res,
          });

          resolve && resolve(res);
        } else {
          // sync faild
          reject && reject(res);
        }
      })
    }
  }
});

storage.save({
  key: 'defaultUser',
  rawData: {
    username: null,
    id: null,
  },
  expires: null,
});

module.exports = storage;
