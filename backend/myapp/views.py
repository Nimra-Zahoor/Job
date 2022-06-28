import json
from django.http import HttpResponse
from .serializer import *
from django.views.decorators.csrf import csrf_exempt

from .models import *

# Create your views here.

def st_ind(request):
    students = []
    data = Student.objects.all()
    for student in data:
        student=StudentSerializers(student).data
        students.append(student)
        print(student)
    return HttpResponse(json.dumps(students))

@csrf_exempt
def getUsers(request):
    users = []
    data = User.objects.all()
    for user in data:
        user=UserSerializers(user).data
        users.append(user)
    return HttpResponse(json.dumps(users))


# ---------------------Add User----------------------


#---------------------Validate User---------------------

def getJobs(request):
    jobs = []
    data = JobModel.objects.all()
    for job in data:
        job=JobModelSerializers(job).data
        jobs.append(job)
    return HttpResponse(json.dumps(jobs))

