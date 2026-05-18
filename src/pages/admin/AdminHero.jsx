import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { PageHeader, SectionCard, EditableText, ImageEditor } from '../../components/admin/FieldEditor';
import { useSiteConfig } from '../../lib/useSiteConfig';
import { Image } from 'lucide-react';

export default function AdminHero() {
  const { config, set } = useSiteConfig();

  return (
    <AdminLayout>
      <PageHeader
        title="Topo do Site (Hero)"
        subtitle="Edite os textos e a imagem que aparecem na primeira tela do seu site."
      />
      <div className="p-8 space-y-6">

        <SectionCard
          title="Imagem de fundo"
          description="A foto principal exibida no topo do site."
          icon={Image}
        >
          <ImageEditor
            label="Foto do Hero"
            value={config.hero_image}
            onSave={(v) => set('hero', 'image', v)}
            hint="Recomendado: foto profissional em formato retrato (vertical). Tamanho mínimo 800x1000px."
          />
        </SectionCard>

        <SectionCard title="Textos principais">
          <EditableText
            label="Etiqueta topo (texto pequeno acima do título)"
            value={config.hero_tag}
            onSave={(v) => set('hero', 'tag', v)}
            hint="Ex: 'Advocacia Estratégica'"
          />
          <EditableText
            label="Título — Linha 1"
            value={config.hero_title_1}
            onSave={(v) => set('hero', 'title_1', v)}
            hint="Primeira linha do título principal."
          />
          <EditableText
            label="Título — Linha 2 (em destaque dourado)"
            value={config.hero_title_2}
            onSave={(v) => set('hero', 'title_2', v)}
            hint="Segunda linha, aparece em cor dourada em itálico."
          />
          <EditableText
            label="Subtítulo"
            value={config.hero_subtitle}
            onSave={(v) => set('hero', 'subtitle', v)}
            multiline
            hint="Texto descritivo abaixo do título principal."
          />
          <EditableText
            label="Texto do selo de confiança"
            value={config.hero_badge}
            onSave={(v) => set('hero', 'badge', v)}
            hint="Ex: 'Atendimento sigiloso e 100% personalizado'"
          />
        </SectionCard>
      </div>
    </AdminLayout>
  );
}