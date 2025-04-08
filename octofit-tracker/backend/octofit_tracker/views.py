from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        "message": "Welcome to the Octofit API!",
        "url": "https://legendary-space-adventure-rrqwrgq6v662x4r-8000.app.github.dev"
    })