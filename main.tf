terraform {
  backend "s3" {
    bucket = "fstatefrontend"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
}


provider "aws" {
  region = "us-east-1"  # Cambia la región según tus necesidades
}

resource "aws_s3_bucket" "static_app_bucket" {
  bucket = "gestiondehospitales" 
  acl    = "public-read"


  # Configuraciones adicionales del bucket de S3 si es necesario
  tags = {
    Name = "Mi aplicación"
  }
}

output "bucket_name" {
  value = aws_s3_bucket.static_app_bucket.bucket
}

