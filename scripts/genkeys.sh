openssl genrsa -out keys/private.pem 2048
openssl rsa -pubout -in keys/private.pem -out keys/public.pem

KEYFILE=src/utils/publicKey.ts
 > $KEYFILE
echo "export const publicKey = \`" >> $KEYFILE
cat keys/public.pem >> $KEYFILE
echo "\`" >> $KEYFILE