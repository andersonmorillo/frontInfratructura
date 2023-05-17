provider "aws" {
  region = "us-east-1"  # Cambia la región según tus necesidades
}

resource "aws_s3_bucket" "static_app_bucket" {
  bucket = "gestiondehospitales"  # Cambia el nombre del bucket según tus necesidades

  # Configuraciones adicionales del bucket de S3 si es necesario
  tags = {
    Name = "Mi aplicación"
  }
}

output "bucket_name" {
  value = aws_s3_bucket.static_app_bucket.name
}

