from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse

@csrf_exempt
def index(request):
    if request.method == 'POST':
        # Use request.POST for form data or request.body for raw data
        data = request.POST
        name = data.get('name')

        # Print the received data in the server console
        print(f"Received data: Name - {name}")

        # Send a response (modify as needed)
        return JsonResponse({'message': 'Data received successfully'})

    return render(request, 'index.html')
