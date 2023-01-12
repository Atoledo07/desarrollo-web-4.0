from empresa import Empresa

class Empleados(Empresa):
    def __init__(self,areas,proyecto,clientes,empleados):
        super().__init__(clientes,empleados)
        self.areas=areas
        self.proyecto=proyecto
    
    def trabajar(self):
        print('Vamos a trabajar')
    
    def divertirse(self):
        print('Vamos a divertirnos')
    

