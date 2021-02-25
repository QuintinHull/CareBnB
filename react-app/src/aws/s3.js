import S3 from 'react-aws-s3';
require('dotenv').config()

const config = {
    bucketName: 'carebnb',
    dirName: 'spot_pictures',
    region: 'us-east-2',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
}

const UploadPictureS3Client = new S3(config);

export default UploadPictureS3Client;