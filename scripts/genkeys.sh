openssl genrsa -out keys/private.pem 2048
openssl rsa -pubout -in keys/private.pem -out keys/public.pem

KEYJS=src/utils/publicKey.js
 > $KEYJS
echo "export const publicKey = \`" >> $KEYJS
cat keys/public.pem >> $KEYJS
echo "\`" >> $KEYJS