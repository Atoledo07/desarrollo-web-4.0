from humano import Humano

class Estudiante(Humano):
    def __init__(self, promedio, carrera, semestre,genero,peso,edad,estatura):
        super().__init__(genero,peso,edad,estatura)
        self.promedio=promedio
        self.carrera=carrera
        self.semestre=semestre
        
    def estudiar(self):
        print('estoy estudiando')
    
    def divertirse(self):
        print('estoy divirtiendome')