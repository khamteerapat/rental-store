#!/bin/sh
/usr/bin/minio server /data --console-address ':9001' &

# รอให้ MinIO เริ่มทำงาน
sleep 10

# ตั้งค่า mc และสร้าง bucket
mc alias set minio http://localhost:9000 minioadmin minioadmin
mc mb minio/rental-store || true

mc anonymous set public minio/rental-store

mc cp --recursive ./rental-store/book-cover minio/rental-store/

# ป้องกัน container จากการหยุดทำงาน
wait