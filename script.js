// Funciones comunes para el sistema

// Inicializar tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    // Configurar eventos para botones de acción
    document.querySelectorAll('.btn-outline-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Funcionalidad de detalle se activaría aquí');
        });
    });
    
    // Configurar eventos para botones de eliminar
    document.querySelectorAll('.btn-outline-danger').forEach(btn => {
        btn.addEventListener('click', function() {
            if(confirm('¿Está seguro de eliminar este registro?')) {
                alert('Registro eliminado (simulado)');
            }
        });
    });
});

// Función para simular guardado de formularios
function simularGuardado() {
    alert('Datos guardados exitosamente (simulado)');
    const modal = bootstrap.Modal.getInstance(document.querySelector('.modal'));
    modal.hide();
}