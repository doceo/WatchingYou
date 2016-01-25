import cv
import time
import os

nome = 0
capture = cv.CaptureFromCAM(0)

while True:
	nome = (nome + 1)%10
	frame = cv.QueryFrame(capture)
	indice = ("%d")%nome
	cv.SaveImage("pictures/image"+indice+".jpg",frame)
	if (nome % 2):
		os.system("cp pictures/image"+indice+".jpg pictures/image.jpg")
		
 	time.sleep(0.5)
