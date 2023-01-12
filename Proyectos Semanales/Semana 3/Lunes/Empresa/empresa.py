class Empresa:
    def __init__(self,clientes,empleados):
        self.clientes=clientes
        self.empleados=empleados
    
    def trabajo(self):
        print('Voy a trabajar')
    
    def proyectos(self):
        print('Proyectos de desarrollo')

elemental=Empresa('Televisa',50)
