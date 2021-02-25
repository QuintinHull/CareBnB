import S3 from 'react-aws-s3';
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY } from './keys';
require('dotenv').config()

const config = {
    bucketName: 'carebnb',
    dirName: 'spot_pictures',
    region: 'us-east-2',
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
}

const UploadPictureS3Client = new S3(config);

export default UploadPictureS3Client;