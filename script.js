const supabaseClient = window.supabase.createClient(
    'https://uhpxxyojejihpvvrptpf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVocHh4eW9qZWppaHB2dnJwdHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NTM3NzksImV4cCI6MjA3NjAyOTc3OX0.k3-OeYyjYSVWpv_nuUqryIW17QIdpCgZ0QEPbX7W7QM'
);

const guardar = document.querySelector('.btn-guardar');
guardar.addEventListener('click', async () => {
    const nombre = document.getElementById('NombreAlumno').value.trim();
    const matricula = document.getElementById('MatriculaAlumno').value.trim();
    const curp = document.getElementById('CURPAlumno').value.trim();
    const CarreraAlumno = document.getElementById('CarreraAlumno').value;
    const { data, error } = await supabaseClient
    .from('users_alfab')
    .insert({user: `${nombre}`, matricula: `${matricula}`, CURP: `${curp}`, carrera: `${CarreraAlumno}`})
});
