from django.db import models

# Create your models here.
JOB_TYPE=(
    ("Full-Time","Full-Time"),
    ("Part-Time","Part-Time"),
    ("Internship","Internship"),
)
CURRENCY_TYPE=(
    ("Rs/-","Rs/-"),
    ("$","$"),
    ("€","€"),
)
SALARY_TYPE=(
    ("Per Year","Per Year"),
    ("Per Month","Per Month"),
   
)

class JobModel(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255,)
    description=models.TextField()
    company_name=models.CharField(max_length=255,)
    working_hours=models.IntegerField()
    salary=models.IntegerField()
    salarytype=models.CharField(
        choices=SALARY_TYPE,
        default="per year",
        max_length=255,

    )
    currency=models.CharField(
        choices=CURRENCY_TYPE,
        default="rupee",
        max_length=255,

    )
   
    jobtype=models.CharField(
        max_length = 20,
        choices=JOB_TYPE,
        default="full-time",
    )
    class Meta:
        ordering=['id']
 
  
class Student(models.Model):
    
    sid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    roll_no = models.IntegerField()

    class Meta:
        ordering = ['roll_no']


class User(models.Model):
    Id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    emailAddress = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    class Meta:
        ordering = ['Id']
